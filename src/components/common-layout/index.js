import Header from "../header";


function CommonLayout({ children }) {
    return (
        <div className="mx-auto max-w-7x1 p-6 1g:px-8">
            
        <Header/>
            
    
            {/*Main content*/}
            <main>{children}</main>
            {/*Main content*/}

        </div>
    );
}

export default CommonLayout

