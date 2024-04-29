import { useLoaderData } from "react-router-dom";
import Swal from 'sweetalert2'

const UpdateCraftItem = () => {

    const item = useLoaderData();
    const {item_name, subcategory, price, rating, process_time, description, customization, stock_state, user_name, user_email, photo, _id} = item;

    const handleUpdateItem = e => {
        e.preventDefault();


        const form = e.target;

        const item_name = form.item_name.value;
        const subcategory = form.subcategory.value;
        const price = form.price.value;
        const rating = form.rating.value;
        const process_time = form.process_time.value;
        const description = form.description.value;
        const customization = form.customization.value;
        const stock_state = form.stock_state.value;
        const user_name = form.user_name.value;
        const user_email = form.user_email.value;
        const photo = form.photo.value;

        const updateItem = {item_name, subcategory, price, rating, process_time, description, customization, stock_state, user_name, user_email, photo}

        console.log(updateItem);

        // send item to server
        fetch(`http://localhost:5000/item/${_id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateItem)
        })
        .then(res => res.json())
        .then(data => {
            if (data.modifiedCount > 0) {
                Swal.fire({
                    title: 'Updated!',
                    text: 'Item updated successfully',
                    icon: 'success',
                    confirmButtonText: 'Nice'
                })
            }
        })
    }
    return (
    
        <div className="bg-[#fff2ca] pt-10">
            <h1 className="pl-4 md:pl-24 text-4xl font-bold">Update Item: {item_name}</h1>
            <form onSubmit={handleUpdateItem}>
                <div className="pt-6 px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <input required defaultValue={item_name} type="text" name="item_name" placeholder="Item Name" className="input input-bordered w-full md:w-1/2" />
                    <select required defaultValue={subcategory} name="subcategory" className="select select-bordered w-full md:w-1/2">
                        <option>No Subcategory</option>
                        <option>Card Making</option>
                        <option>Scrapbooking</option>
                        <option>Paper Quilling & origami</option>
                        <option>Glass Painting</option>
                        <option>Lampworking</option>
                        <option>Glass Dying & Staining</option>
                    </select>
                </div>

                {/* ------------------------- */}
                <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <input required defaultValue={price} type="text" name="price" placeholder="Price" className="input input-bordered w-full md:w-1/2" />
                    <input required defaultValue={rating} type="text" name="rating" placeholder="Rating" className="input input-bordered w-full md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <input required defaultValue={process_time} type="text" name="process_time" placeholder="Processing Time" className="input input-bordered w-full md:w-1/2" />
                    <input required defaultValue={description} type="text" name="description" placeholder="Short description" className="input input-bordered w-full md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <select required defaultValue={customization} name="customization" className="select select-bordered w-full">
                        <option disabled >Customization</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <select required defaultValue={stock_state} name="stock_state" className="select select-bordered w-full">
                        <option disabled>Stock Status</option>
                        <option>In Stock</option>
                        <option>Made to Order</option>
                    </select>
                </div>

                {/* ------------------------- */}
                <div className="px-4 md:px-24 pb-6 flex flex-col md:flex-row md:justify-between gap-5">
                    <input required defaultValue={user_name} type="text" name="user_name" placeholder="User Name" className="input input-bordered w-full md:w-1/2" />
                    <input readOnly defaultValue={user_email} type="email" name="user_email" placeholder={"User Email"} className="input input-bordered w-full md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="pb-5 px-4 md:px-24">
                    <input required defaultValue={photo} type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                </div>
                <div className="pb-24 px-4 md:px-24">
                    <button className="btn w-full bg-[#e6b472] font-bold">Update</button>
                </div>
            </form>
        </div>
    );
};

export default UpdateCraftItem;