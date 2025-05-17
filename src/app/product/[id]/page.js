import React from "react";

export default function Product({ params }) {
    return(
        <div>
            <h1>Product {params.id}</h1>
            <p>This is the product page</p>
        </div>
    );
}  