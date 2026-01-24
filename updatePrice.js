
document.addEventListener('DOMContentLoaded', function() {
    const priceAreas = document.querySelectorAll('.price-area');

    priceAreas.forEach(function(area) {
        const priceSpan = area.querySelector('.price');
        const oldPriceSpan = area.querySelector('.old-price');

        if (priceSpan && oldPriceSpan) {
            const price = parseFloat(priceSpan.textContent.replace('$', ''));
            const oldPrice = parseFloat(oldPriceSpan.textContent.replace('$', ''));

            if (!isNaN(price) && !isNaN(oldPrice) && oldPrice > price) {
                const discount = Math.round(((oldPrice - price) / oldPrice) * 100);
                
                // Create the new HTML structure
                const newHTML = `
                    <div>
                        <span class="discount-percentage">-${discount}%</span>
                        <span class="price-symbol">$</span><span class="price-amount">${price.toFixed(2)}</span>
                    </div>
                    <div class="typical-price">Typical price: $${oldPrice.toFixed(2)}</div>
                `;

                // Replace the content of the price-area
                area.innerHTML = newHTML;
            }
        }
    });
});
