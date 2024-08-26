import { products } from './products.js';

// Function to get the product ID from the URL
function getProductIdFromUrl() {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get('id');
}

// Function to find the product in the array
function getProductById(productId) {
    return products.find(product => product.id === productId);
}

// Function to update the HTML content with the product details
export function updateProductDetails(product) {
    if (!product) {
        console.error('Product not found');
        return;
    }

    // Update product image
    const productWrapper = document.querySelector('.woocommerce-product-gallery__wrapper div');
    const productLink = productWrapper.querySelector('a');
    const productImage = productWrapper.querySelector('img');

    productWrapper.setAttribute('data-thumb', product.image.dataThumb);
    productLink.href = product.image.href;
    productImage.src = product.image.src;
    productImage.setAttribute('data-src', product.image.dataSrc);
    productImage.setAttribute('data-large_image', product.image.dataLargeImage);
    productImage.setAttribute('srcset', product.image.srcset);

    // updating the type links 
    const trailItemLink = document.querySelector('#middle a');
    trailItemLink.href = product.type;

    // updating the type text 
    const trailItemText = document.querySelector('#middle_text');
    trailItemLink.textContent = product.type_text;

    // updating the product name 
    const trailItemName = document.querySelector('#name');
    trailItemName.textContent = product.name;
    
    // Update product title
    const productTitle = document.querySelector('.product_title');
    productTitle.textContent = product.name;

    // Update product price
    const productPrice = document.querySelector('#tert');
    productPrice.textContent = product.price;

    // Update product short description
    const shortProductDescription = document.querySelector('.woocommerce-product-details__short-description p');
    shortProductDescription.textContent = product.shortDescription;

       // Update product short description
     const productDescription = document.querySelector('#description');
     productDescription.textContent = product.description;
   
  // Select the <span> element with the class 'posted_in'
const postedInSpan = document.querySelector('.posted_in');

// Ensure the element exists before proceeding
if (postedInSpan) {
    // Select all <a> tags within the 'posted_in' span
    const categoryLinks = postedInSpan.querySelectorAll('a');

    // Update the first <a> tag
    if (categoryLinks[0]) {
        categoryLinks[0].href = product.category_1_link;
        categoryLinks[0].textContent = product.category_1_text;
    }

    // Update the second <a> tag
    if (categoryLinks[1]) {
        categoryLinks[1].href = product.category_2_link;
        categoryLinks[1].textContent = product.category_2_text;
    }
}
  

 
    // Update product tags
    const tagsSpan = document.querySelector('.tagged_as');
    const tagLinks = tagsSpan.querySelectorAll('a');

    tagLinks[0].href = product.tag_1_link;
    tagLinks[0].textContent = product.tag_1_text;

    if (tagLinks[1]) {
        tagLinks[1].href = product.tag_2_link;
        tagLinks[1].textContent = product.tag_2_text;
    }

    if (tagLinks[2]) {
        tagLinks[2].href = product.tag_3_link;
        tagLinks[2].textContent = product.tag_3_text;
    }

    // Select the input element by its class
const quantityInput = document.querySelector('.input-text.qty.text');

// Change the ID
quantityInput.id = product.id;


    console.log('Product details updated:', product);
}

// Main function to execute the above functions
function main() {
    const productId = getProductIdFromUrl();
    const product = getProductById(productId);
    if (product) {
        console.log('Running script for product ID:', productId);
        updateProductDetails(product);
    } else {
        console.error('No product found for ID:', productId);
    }
}

// Run the main function on page load
window.addEventListener('DOMContentLoaded', main);
