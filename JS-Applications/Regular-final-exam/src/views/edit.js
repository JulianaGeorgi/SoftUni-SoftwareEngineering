import { editAlbum, getById } from '../api/data.js';
import { html } from '../lib.js';
import { createSubmitHandler } from '../util.js';

const editTemplate = (album, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Album</h2>
        <form @submit=${onEdit} class="edit-form">
            <input type="text" name="singer" id="album-singer" .value=${album.singer}/>
            <input type="text" name="album" id="album-album" .value=${album.album}/>
            <input type="text" name="imageUrl" id="album-img" .value=${album.imageUrl}/>
            <input type="text" name="release" id="album-release" .value=${album.release}/>
            <input type="text" name="label" id="album-label" .value=${album.label}/>
            <input type="text" name="sales" id="album-sales" .value=${album.sales}/>

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);
    ctx.render(editTemplate(album, createSubmitHandler(onEdit)));

    async function onEdit({ singer, album, imageUrl, release, label, sales }, form) {
        if (singer == '' || album == '' || imageUrl == '' || release == '' || label == '' || sales == '') {
            return alert('All fields are required!');
        }

        await editAlbum(id, {
            singer,
            album, 
            imageUrl, 
            release, 
            label, 
            sales
          });
        form.reset();
        ctx.page.redirect('/dashboard/' + id);
    }
}