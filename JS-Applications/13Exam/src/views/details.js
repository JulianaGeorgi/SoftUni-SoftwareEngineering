// 3) Like button is visible for the non-creator user [ 2.5 Points ]
// 4) Like button is NOT visible for the creator [ 2.5 Points ]
// 5) Like button should be hidden(not visible) after a click on it [ 5 Points ]
// 6) Like button should increase total applications by 1 after a click on it [ 2.5 Points ]
import { deleteById, getById } from '../api/data.js';
import { html, nothing } from '../lib.js';

const detailsTemplate = (album, isOwner, hasUser, onDelete) => html`
<section id="details">
    <div id="details-wrapper">
        <p id="details-title">Album Details</p>
        <div id="img-wrapper">
            <img src=${album.imageUrl} alt="example1" />
        </div>
        <div id="info-wrapper">
            <p><strong>Band:</strong><span id="details-singer">${album.singer}</span></p>
            <p>
                <strong>Album name:</strong><span id="details-album">${album.album}</span>
            </p>
            <p><strong>Release date:</strong><span id="details-release">${album.release}</span></p>
            <p><strong>Label:</strong><span id="details-label">${album.label}</span></p>
            <p><strong>Sales:</strong><span id="details-sales">${album.sales}</span></p>
        </div>
        <div id="likes">Likes: <span id="likes-count">0</span></div>


        ${hasUser ? html`
        <div id="action-buttons">
            ${isOwner ? html`<a href="/edit/${album._id}" id="edit-btn">Edit</a>
            <a @click=${onDelete} href="javascript:void(0)" id="delete-btn">Delete</a>`
                : html`<a href="" id="like-btn">Like</a>`}
        </div>`
        : nothing}
    </div>
</section>
`;

export async function showDetails(ctx) {
    const id = ctx.params.id;
    const album = await getById(id);
    const hasUser = Boolean(ctx.user);
    const isOwner = hasUser && ctx.user._id == album._ownerId;
    ctx.render(detailsTemplate(album, isOwner, hasUser, onDelete))

    async function onDelete() {
        const choice = confirm('Are you sure you want to delete this album?');

        if (choice) {
            await deleteById(id);
            ctx.page.redirect('/dashboard');
        }
    }

    // async function onLike(){

    // }
}