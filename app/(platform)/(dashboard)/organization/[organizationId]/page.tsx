"use client";


const OrganizationIdPage = () => {
   console.log('I am rendered in the browser')

    return (
        <div>
            <form>
                <input
                id="title"
                name="title"
                required
                placeholder='enter a board title'
                className='border-black border p-1'
                />
            </form>
        </div>
    );
};
export default OrganizationIdPage;