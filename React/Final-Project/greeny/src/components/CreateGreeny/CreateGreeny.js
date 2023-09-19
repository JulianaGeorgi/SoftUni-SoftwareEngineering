import { TEInput } from "tw-elements-react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { useGreeny } from "../../contexts/GreenyContext";
import { postServices } from "../../services/postServices";


export const CreateGreeny = () => {

    const navigate = useNavigate();

    const { currentUser } = useAuth();
    const userId = currentUser.uid;

    const { createGreeny } = useGreeny();

    const form = useForm(
        {
            mode: "onChange",
            defaultValues: {
                author: "", // TODO: autopopulate author with currentUser.displayName (username)
                title: "",
                imageUrl: "",
                content: "",
            }
        }
    );

    const { register, getValues, reset, handleSubmit, formState } = form;
    const { errors, isDirty, isValid } = formState;

    const onCreateGreenySubmit = async () => {

        const formValues = getValues();
        const newGreeny = { ...formValues, ownerId: userId }

        const newGreenyData = await postServices().publishPost(newGreeny); // save in db

        createGreeny(newGreenyData); //update state

        navigate(`/greenies/${newGreenyData.id}`);
        //TODO: Add error handling
    };


    return (
        <section className="p-12 bg-forest">
            <div className="max-w-lg mx-auto bg-white border rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onCreateGreenySubmit)} noValidate>
                    <fieldset className="m-6 ">
                        <legend className="mb-6 text-3xl text-gray-700 font-bold text-center">Create a Greeny</legend>

                        {/* AUTHOR */}
                        <div className="mb-6">
                            <TEInput
                                type="text"
                                label="Author"
                                className="mb-2"
                                id="author"
                                required={true}
                                {...register("author", {
                                    required: "Please enter an author for your Greeny.",
                                    minLength: {
                                        value: 3,
                                        message: "The author's name must be at least 3 characters long."
                                    }
                                })}
                                error={(errors.author)}
                            />
                            {errors.author && (
                                <p className="text-red-600 text-sm">{errors.author.message}</p>
                            )}
                        </div>

                        {/* TITLE */}
                        <div className="mb-6">
                            <TEInput
                                type="text"
                                label="Title"
                                className="mb-2"
                                id="title"
                                required={true}
                                {...register("title", {
                                    required: "Please enter a title for your Greeny.",
                                    minLength: {
                                        value: 3,
                                        message: "The title must be at least 3 characters long."
                                    }
                                })}
                                error={(errors.title)}
                            />
                            {errors.title && (
                                <p className="text-red-600 text-sm">{errors.title.message}</p>
                            )}
                        </div>

                        {/* CATEGORY */}
                        <div className="mb-6">
                            <label htmlFor="category" className="block mb-2 font-medium text-gray-700">
                                Category
                            </label>
                            <select
                                id="category"
                                required={true}
                                className="w-full bg-transparent border rounded border-stone-300 focus:border-primary px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                                {...register("category", {
                                    required: "Please choose a category for your Greeny."
                                })}
                            >
                                <option value="">Choose category...</option>
                                <option value="Reduce">Reduce</option>
                                <option value="Reuse">Reuse</option>
                                <option value="Recycle">Recycle</option>
                                <option value="Knowledge">Knowledge</option>
                            </select>
                            {errors.category && (
                                <p className="text-red-600 text-sm">{errors.category.message}</p>
                            )}
                        </div>

                        {/* IMAGE */}
                        <div className="mb-6">
                            <TEInput
                                type="url"
                                label="Image link"
                                className="mb-2"
                                id="imageUrl"
                                required={true}
                                {...register("imageUrl", {
                                    required: "Please enter an image link for your Greeny.",
                                    pattern: {
                                        value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                                        message: "Invalid image URL."
                                    }
                                })}
                                error={(errors.imageUrl)}
                            />
                            {errors.imageUrl && (
                                <p className="text-red-600 text-sm">{errors.imageUrl.message}</p>
                            )}
                        </div>

                        {/* CONTENT */}
                        <div className="mb-6">
                            <label htmlFor="content" className="block mb-2 font-medium text-gray-700">
                                Content
                            </label>
                            <textarea
                                placeholder="Write your Greeny here"
                                rows="8"
                                id="content"
                                required={true}
                                className="w-full bg-transparent border rounded border-stone-300 focus:border-primary px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                                {...register("content", {
                                    required: "Please enter the content of your Greeny.",
                                    maxLength: {
                                        value: 500,
                                        message: "Content of Greeny exceeds the limit of 500 characters."
                                    }
                                })}
                            />
                            {errors.content && (
                                <p className="text-red-600 text-sm">{errors.content.message}</p>
                            )}
                        </div>

                        {/* FORM BUTTONS */}
                        <div className="flex justify-center space-x-4">
                            <button
                                disabled={!isDirty || !isValid}
                                className="px-4 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                type="submit"
                            >
                                Submit
                            </button>
                            <button
                                onClick={() => reset()}
                                className="px-4 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                type="button"
                            >
                                Cancel
                            </button>
                        </div>
                    </fieldset>
                </form>
            </div>
        </section>
    );
}    