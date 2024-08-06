import React from "react";

function BusinessEntry()
{
    return(
        <div>
            <h1>Post your business here....</h1>
            <div>
                <form action="">
                  <p>Username</p><input id='user-name' type="text" placeholder="enter username" required />
                  <input type="text" placeholder="business name" required />
                  <select name="" id="">
                    <option value="health">health</option>
                    <option value="health">Vehicle</option>
                    <option value="health">Cloths</option>
                    <option value="health">Mechanical</option>
                    <option value="health">Electrical</option>
                  </select>
                  <input type="image" placeholder="add images" />
                </form>
            </div>
        </div>
    );

}

export default BusinessEntry;