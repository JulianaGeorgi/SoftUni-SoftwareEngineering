import { TEInput, TERipple } from "tw-elements-react";

import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

import { useAuth } from "../../contexts/AuthContext";
import { useGreeny } from "../../contexts/GreenyContext";
import { postServices } from "../../services/postServices";


export const CreateGreeny = () => {

    const navigate = useNavigate();

    const { currentUser } = useAuth();
    const userId = currentUser.uid;

    const { setGreenies } = useGreeny();

    const form = useForm(
        {
            mode: "onChange",
            defaultValues: {
                author: "",
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
        
        const newGreenyData = await postServices().publishPost(newGreeny);
        
        setGreenies((oldGreenies) => [...oldGreenies, newGreenyData]);
        
        navigate(`/greenies/${newGreenyData.id}`);
        //TODO: Add error handling
    };


    return (
        <section className="m-12 bg-light-green">
            <div className="p-10 w-auto m-auto bg-champagne">
                <form onSubmit={handleSubmit(onCreateGreenySubmit)} noValidate>
                    <fieldset>
                        <legend className="mb-10 text-center">Create a Greeny</legend>

                        {/* AUTHOR */}
                        <div>
                            <TEInput
                                type="text"
                                label="Author"
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
                            <TEInput
                                type="text"
                                label="Title"
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

                        {/* IMAGE */}
                        <div>
                            <TEInput
                                type="url"
                                label="Image link"
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
                            <TERipple rippleColor="light">
                                <button
                                    disabled={!isDirty || !isValid}
                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    type="submit"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                    }}
                                >
                                    Submit
                                </button>
                            </TERipple>
                        </div>
                        <div className="mb-12 pb-1 pt-1 text-center">
                            <TERipple rippleColor="light">
                                <button
                                    onClick={() => reset()}
                                    className="mb-3 inline-block w-full rounded px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_rgba(0,0,0,0.2)] transition duration-150 ease-in-out hover:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)] focus:outline-none focus:ring-0 active:shadow-[0_8px_9px_-4px_rgba(0,0,0,0.1),0_4px_18px_0_rgba(0,0,0,0.2)]"
                                    type="button"
                                    style={{
                                        background:
                                            "linear-gradient(to right, #ee7724, #d8363a, #dd3675, #b44593)",
                                    }}
                                >
                                    Cancel
                                </button>
                            </TERipple>
                        </div>
                    </div>

                </form>
            </div>
        </section>
    )
}