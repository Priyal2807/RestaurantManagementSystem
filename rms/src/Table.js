import React from 'react'
const Table = () => {
    const handleLogout = () => {
        localStorage.removeItem("token");
        window.location = "/"
    };
    return (
        <div className="Container">
            <div class="row">
                <div className="col s12"><button onClick={handleLogout}>Logout</button></div>
            </div>
            <div className="row">
                <div className="col s3 table">Table 1</div>
                <div className="col s3 table">Table 2</div>
                <div className="col s3 table">Table 3</div>
            </div>
            <div className="row">
                <div className="col s3 table">Table 4</div>
                <div className="col s3 table">Table 5</div>
                <div className="col s3 table">Table 6</div>
                </div>
        </div>
    )
}

export default Table