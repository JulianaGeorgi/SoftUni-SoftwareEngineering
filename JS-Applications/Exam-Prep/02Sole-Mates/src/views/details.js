import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemp = (shoe, isOwner, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Shoe Details</p>
        <div id="img-wrapper">
            <img src="./images/travis.jpg" alt="example1" />
        </div>
        <div id="info-wrapper">
            <p>Brand: <span id="details-brand">${shoe.brand}</span></p>
            <p>
                Model: <span id="details-model">${shoe.model}</span>
            </p>
            <p>Release date: <span id="details-release">${shoe.release}</span></p>
            <p>Designer: <span id="details-designer">${shoe.designer}</span></p>
            <p>Value: <span id="details-value">${shoe.value}</span></p>
        </div>
        ${!isOwner ? nothing
            : html`
        <div id="action-buttons">
            <a href="/edit/${shoe._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>
        </div>
        `}
    </div>
</section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const shoe = await getById(id);
    const isOwner = shoe._ownerId == ctx.user._id;
    ctx.render(detailsTemp(shoe, isOwner, onDelete));

    async function onDelete(){
        const choice = confirm('Are you sure you want to delete this shoe?');
    
        if(choice){
            await deleteById(id);
            ctx.page.redirect('/dashboard');
        }
    }
}