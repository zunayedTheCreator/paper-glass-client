const AddCraftItem = () => {

    const handleAddItem = e => {
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

        const newItem = {item_name, subcategory, price, rating, process_time, description, customization, stock_state, user_name, user_email, photo}

        console.log(newItem);
    }

    return (
        <div className="bg-[#fff2ca]">
            <h1 className="pl-24 pt-24 text-4xl font-bold">Add a Craft Item</h1>
            <form onSubmit={handleAddItem}>
                <div className="pt-6 px-24 pb-6 md:flex md:justify-between gap-5">
                    <input type="text" name="item_name" placeholder="Item Name" className="input input-bordered md:w-1/2" />
                    <select name="subcategory" className="select select-bordered md:w-1/2">
                        <option disabled selected>Subcategory Name</option>
                        <option>Card Making</option>
                        <option>Scrapbooking</option>
                        <option>Paper Quilling & origami</option>
                        <option>Glass Painting</option>
                        <option>Lampworking</option>
                        <option>Glass Dying & Staining</option>
                    </select>
                </div>

                {/* ------------------------- */}
                <div className="px-24 pb-6 md:flex md:justify-between gap-5">
                    <input type="text" name="price" placeholder="Price" className="input input-bordered md:w-1/2" />
                    <input type="text" name="rating" placeholder="Rating" className="input input-bordered md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="px-24 pb-6 md:flex md:justify-between gap-5">
                    <input type="text" name="process_time" placeholder="Processing Time" className="input input-bordered md:w-1/2" />
                    <input type="text" name="description" placeholder="Short description" className="input input-bordered md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="px-24 pb-6 md:flex md:justify-between gap-5">
                    <select name="customization" className="select select-bordered w-full">
                        <option disabled selected>Customization</option>
                        <option>Yes</option>
                        <option>No</option>
                    </select>
                    <select name="stock_state" className="select select-bordered w-full">
                        <option disabled selected>Stock Status</option>
                        <option>In Stock</option>
                        <option>Made to Order</option>
                    </select>
                </div>

                {/* ------------------------- */}
                <div className="px-24 pb-6 md:flex md:justify-between gap-5">
                    <input type="text" name="user_name" placeholder="User Name" className="input input-bordered md:w-1/2" />
                    <input type="text" name="user_email" placeholder="User Email" className="input input-bordered md:w-1/2" />
                </div>

                {/* ------------------------- */}
                <div className="pb-5 px-24">
                    <input type="text" name="photo" placeholder="Photo URL" className="input input-bordered w-full" />
                </div>
                <div className="pb-24 px-24">
                    <button className="btn w-full bg-[#e6b472] font-bold">Add</button>
                </div>
            </form>
        </div>
    );
};

export default AddCraftItem;