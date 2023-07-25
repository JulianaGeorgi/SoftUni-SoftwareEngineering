import { Injectable } from '@angular/core';
import { Database, ref, onValue } from '@angular/fire/database';
import { child, push, update, remove } from 'firebase/database';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class TipService {

  constructor(
    private database: Database,
  ) { }

  getAllTips(): Observable<any> {

    const databaseRef = ref(this.database, 'traveltips');

    return new Observable((obs) => {
      onValue(databaseRef, (snapshot: any) => {
        const tips = snapshot.val();
        obs.next(tips); // next param - callback f -> gets executed every time the next method returns a value
        obs.complete();
      });
    })
  }

  getTipsByUser(userId: string): Observable<any> {

    const databaseRef = ref(this.database, `traveltips/${userId}`);

    return new Observable((obs) => {
      onValue(databaseRef, (snapshot: any) => {
        const tips = snapshot.val();
        obs.next(tips);
        obs.complete();
      });
    })
  }

  getOneTip(userId: string | null, tipId: string | null): Observable<any> {

    const databaseRef = ref(this.database, `traveltips/${userId}/${tipId}`);

    return new Observable((obs) => {

      onValue(databaseRef, (snapshot: any) => {
        if (snapshot && snapshot.exists()) {
          const tip = snapshot.val();
          obs.next(tip);
          obs.complete();
          return tip;
        } else {
          obs.error();
        }
      });
    })
  }

  editTip(tipDetails: any, userId: string | null, tipId: string | null){

    const editedTipDetails = {
      tipTitle: tipDetails.tipTitle,
      authorName: tipDetails.authorName,
      imageUrl: tipDetails.imageUrl,
      tipContent: tipDetails.tipContent
    }

    push(child(ref(this.database), 'traveltips')).key;

    const updates: any = {};

    updates['/traveltips/' + userId + '/' + tipId] = editedTipDetails;
  
    return update(ref(this.database), updates);
  }

  submitNewTip(userId: string | null, tipTitle: string, authorName: string, imageUrl: string, tipContent: string) {

    const newTipRef = push(ref(this.database, 'traveltips/' + userId), {
      tipTitle: tipTitle,
      authorName: authorName,
      imageUrl: imageUrl,
      tipContent: tipContent
    });

    const newTipKey = newTipRef.key;

    //TODO: add error handling - if key cannot be retrieved
    return newTipKey;
  }

  deleteTip(userId: string | null, tipId: string | null) {

    const tipRef = ref(this.database, `traveltips/${userId}/${tipId}`);

    remove(tipRef).then(() => {
    });
  }
}