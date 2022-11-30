import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemp = (offer, hasUser, isOwner, onDelete) => html`<section id="details">
    <div id="details-wrapper">
        <img id="details-img" src="./images/example2.png" alt="example1" />
        <p id="details-title">${offer.title}</p>
        <p id="details-category">
            Category: <span id="categories">${offer.category}</span>
        </p>
        <p id="details-salary">
            Salary: <span id="salary-number">${offer.salary}</span>
        </p>
        <div id="info-wrapper">
            <div id="details-description">
                <h4>Description</h4>
                <span>${offer.description}</span>
            </div>
            <div id="details-requirements">
                <h4>Requirements</h4>
                <span>${offer.requirements}</span>
            </div>
        </div>
        <p>Applications: <strong id="applications">1</strong></p>
        ${hasUser 
            ? html`
            <!--Bonus - Only for logged-in users ( not authors )-->
            <a href="" id="apply-btn">Apply</a>
                ${isOwner 
                ? html`<!--Edit and Delete are only for creator-->
                <div id="action-buttons">
                <a href="/edit/${offer._id}" id="edit-btn">Edit</a>
                <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
                </div>`
                : nothing }
            </div>`
            : nothing}
    </div>
</section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const offer = await getById(id);
    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && offer._ownerId == ctx.user._id;

    ctx.render(detailsTemp(offer, hasUser, isOwner, onDelete))

    async function onDelete(){;
        const choice = confirm("Are you sure you want to delete this item?");

        if(choice){
            await deleteById(id);
            ctx.page.redirect('/');
        }
    }
};