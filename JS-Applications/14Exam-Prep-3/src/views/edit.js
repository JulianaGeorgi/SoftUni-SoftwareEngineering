import { editOffer, getById } from "../api/data.js";
import { html } from "../lib.js";
import { createSubmitHandler } from "../util.js";

const editTemp = (offer, onEdit) => html`
<section id="edit">
    <div class="form">
        <h2>Edit Offer</h2>
        <form @submit= ${onEdit} class="edit-form">
            <input type="text" name="title" id="job-title" .value=${offer.title} />
            <input type="text" name="imageUrl" id="job-logo" .value=${offer.imageUrl} />
            <input type="text" name="category" id="job-category" .value=${offer.category} />
            <textarea id="job-description" name="description" .value=${offer.description} rows="4" cols="50"></textarea>
            <textarea id="job-requirements" name="requirements" .value=${offer.requirements} rows="4"
                cols="50"></textarea>
            <input type="text" name="salary" id="job-salary" .value=${offer.salary} />

            <button type="submit">post</button>
        </form>
    </div>
</section>
`;

export async function showEdit(ctx) {
    const id = ctx.params.id;
    const offer = await getById(id); 
    ctx.render(editTemp(offer, createSubmitHandler(onEdit)))

    async function onEdit({ title, imageUrl, category, description, requirements, salary }, form) {
        if ([title, imageUrl, category, description, requirements, salary].some(e => e == "")) {
            return alert('All fields are required!');
        }

        await editOffer(id, { // = offerData
            title,
            imageUrl,
            category,
            description,
            requirements,
            salary

        });
        form.reset();
        ctx.page.redirect('/');
    }
}