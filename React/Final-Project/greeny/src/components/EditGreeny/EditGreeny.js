import { TEInput } from "tw-elements-react";

import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { useGreeny } from "../../contexts/GreenyContext";
import { postServices } from "../../services/postServices";


export const EditGreeny = () => {

    const navigate = useNavigate();

    const params = useParams();
    const id = params.greenyId;

    const { currentUser } = useAuth();
    const userId = currentUser.uid;

    const { editGreeny } = useGreeny();


    //TODO: do it with a guard
    // useEffect(()=>{
    //     async function checkifIsOwner (){
    //         const currentGreeny = await postServices().getGreenyById(id);
    //         const isOwner = currentUser && currentUser.uid === currentGreeny.ownerId;
    //         if (!isOwner){
    //             navigate("/")
    //         }
    //     }
    //     checkifIsOwner();
    // }, [currentUser, id, navigate])

    // const isOwner = currentUser && currentUser.uid === currentGreeny.ownerId;

    const form = useForm(
        {
            mode: "onChange",
            defaultValues: async () => {
                const currentGreeny = await postServices().getGreenyById(id);
                return {
                    author: currentGreeny.author,
                    title: currentGreeny.title,
                    imageUrl: currentGreeny.imageUrl,
                    content: currentGreeny.content,
                }
            }
        }
    );

    const { register, getValues, handleSubmit, formState } = form;
    const { errors, isDirty, isValid } = formState;

    const onUpdateGreenySubmit = async () => {

        const formValues = getValues();
        const updatedGreeny = { ...formValues, ownerId: userId }

        const updatedGreenyData = await postServices().updateGreeny(updatedGreeny, id);

        editGreeny(updatedGreenyData, id);

        navigate(`/greenies/${id}`);
        // //TODO: Add error handling
    };


    return (
        <section className="p-12 bg-gradient-to-r from-red-200 via-red-300 to-yellow-200">
            <div className="max-w-lg mx-auto bg-white border rounded-lg shadow-lg">
                <form onSubmit={handleSubmit(onUpdateGreenySubmit)} noValidate>
                    <fieldset className="m-6">
                        <legend className="mb-6 text-3xl text-gray-700 font-bold text-center">Edit Greeny</legend>

                        {/* AUTHOR */}
                        <div>
                            <label htmlFor="author" className="block mb-2 font-medium text-gray-700">
                                Author
                            </label>
                            <TEInput
                                type="text"
                                className="mb-4"
                                id="author"
                                required={true}
                                {...register("author", {
                                    required: "Please enter an author for your Greeny.",
                                    minLength: {
                                        value: 3,
                                        message: "The author's name must be at least 3 symbols long."
                                    }
                                })}
                                error={(errors.author)}
                            ></TEInput>
                            {errors.author && (
                                <p className="text-sm text-red-600">{errors.author.message}</p>
                            )}
                        </div>

                        {/* TITLE */}
                        <div>
                            <label htmlFor="title" className="block mb-2 font-medium text-gray-700">
                                Title
                            </label>
                            <TEInput
                                type="text"
                                className="mb-4"
                                id="title"
                                required={true}
                                {...register("title", {
                                    required: "Please enter a title of your Greeny.",
                                    minLength: {
                                        value: 3,
                                        message: "The title must be at least 3 symbols long."
                                    }
                                })}
                                error={(errors.title)}
                            ></TEInput>
                            {errors.title && (
                                <p className="text-sm text-red-600">{errors.title.message}</p>
                            )}
                        </div>

                        {/* CATEGORY */}
                        <div>
                            <label htmlFor="category" className="block mb-2 font-medium text-gray-700">
                                Category
                            </label>
                            <   select
                                id="select"
                                required={true}
                                className="w-full bg-transparent border rounded border-stone-300 focus:border-primary px-3 py-2 text-gray-800 focus:outline-none focus:ring-2 focus:ring-primary"
                                {...register("category", {
                                    required: "Please choose a category of your Greeny."
                                }
                                )}>
                                <option value="">Choose category...</option>
                                <option value="Reduce">Reduce</option>
                                <option value="Reuse">Reuse</option>
                                <option value="Recycle">Recycle</option>
                                <option value="Knowledge">Knowledge</option>
                            </select>
                            {errors.category && (
                                <p className="text-sm text-red-600">{errors.category.message}</p>
                            )}
                        </div>

                        {/* IMAGE */}
                        <div>
                            <label htmlFor="imageUrl" className="block mb-2 font-medium text-gray-700">
                                Image link
                            </label>
                            <TEInput
                                type="url"
                                className="mb-4"
                                id="imageUrl"
                                required={true}
                                {...register("imageUrl", {
                                    required: "Please enter an image link for your Greeny.",
                                    pattern: {
                                        value: /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/,
                                        message: "Invalid image url."
                                    }
                                })}
                                error={(errors.imageUrl)}
                            ></TEInput>
                            {errors.imageUrl && (
                                <p className="text-sm text-red-600">{errors.imageUrl.message}</p>
                            )}
                        </div>

                        {/* CONTENT */}
                        <div>
                            <label htmlFor="content" className="block mb-2 font-medium text-gray-700">
                                Content
                            </label>
                            <textarea
                                placeholder="Write your Greeny here"
                                rows="10"
                                type="text"
                                id="content"
                                required={true}
                                className="peer block min-h-[auto] w-full rounded border border-stone-300 bg-transparent outline-none transition-all duration-200 ease-linear focus:placeholder:opacity-100 peer-focus:text-primary motion-reduce:transition-none placeholder:opacity-0 disabled:bg-neutral-100 read-only:bg-neutral-100 dark:disabled:bg-neutral-700 dark:read-only:bg-neutral-700 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:peer-focus:text-primary px-3 py-[0.32rem] leading-[1.6] mb-4"
                                {...register("content", {
                                    required: "Please enter the content of your Greeny.",
                                    maxLength: {
                                        value: 500,
                                        message: "Content of Greeny exceeds the limit of 500 characters."
                                    }
                                })}
                                error={(errors.content)}
                            >
                            </textarea>
                            {errors.content && (
                                <p className="text-sm text-red-600">{errors.content.message}</p>
                            )}
                        </div>
                    </fieldset>

                    {/* FORM BUTTONS */}
                    <div className="flex flex-row justify-center gap-3">
                        <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                                disabled={!isDirty || !isValid}
                                className="px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                type="submit"
                            >
                                Update
                            </button>
                        </div>
                        <div className="mb-12 pb-1 pt-1 text-center">
                            <button
                                onClick={() => navigate(-1)}
                                className="px-10 py-2 text-white bg-gradient-to-r from-orange-400 via-red-400 to-pink-500 rounded-full hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-pink-500"
                                type="button"
                            >
                                Go back
                            </button>

                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}