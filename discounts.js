//Arrow function to get the discount from a price
const getDiscount = (price, discountPercentage) => {
    return price - (price * (discountPercentage / 100));
}

const getDiscountFromPrice = () => {
    let price = document.getElementById("price").value;
    let discountPercentage = document.getElementById("discount").value;
    console.log(price);
    console.log(discountPercentage);
    if (discountPercentage <= 100) {
        let discount = getDiscount(price, discountPercentage);
        let savings = price - discount;
        document.getElementById("savings-result").innerHTML = `$${savings.toFixed(2)}`;
        document.getElementById("discount-result-price").innerHTML = `$${discount.toFixed(2)}`;
        document.getElementById("error-container").innerHTML = "";
    } else {
        document.getElementById("savings-result").innerHTML = `$0`;
        document.getElementById("discount-result-price").innerHTML = `$0`;
        document.getElementById("error-container").innerHTML = "<p>Please enter a value less than 100.</p>";
    }
}

//Array of objects with coupon codes and their discount percentage
const coupons = [
    {
        code: "10OFF",
        discount: 10
    },
    {
        code: "20OFF",
        discount: 20
    },
    {
        code: "30OFF",
        discount: 30
    },
    {
        code: "40OFF",
        discount: 40
    }
]

//Arrow function to apply a coupon code
const applyCoupon = () => {
    let couponV = document.getElementById("coupon").value;
    let priceText = document.getElementById("discount-result-price").innerText;
    let totalPrice = document.getElementById("price").value;
    const priceNumber = priceText.substring(1, priceText.length - 3);
    let discountPercentage = document.getElementById("discount").value;

    const validateCoupon = (coupon) => {
        return coupon.code === couponV;
    }

    const userCoupon = coupons.find(validateCoupon);

    if (!userCoupon) {
        let discount = getDiscount(totalPrice, discountPercentage);
        let savings = totalPrice - discount;
        document.getElementById("coupon-result").innerHTML = `$0`;
        document.getElementById("savings-result").innerHTML = `$${savings.toFixed(2)}`;
        document.getElementById("error-container").innerHTML = `<p>Coupon not found.</p>`;
    } else {
        let discountWithCoupon = getDiscount(priceNumber, userCoupon.discount);
        let savingsWithCoupon = totalPrice - discountWithCoupon;

        document.getElementById("coupon-result").innerHTML = `$${discountWithCoupon.toFixed(2)}`;
        document.getElementById("savings-result").innerHTML = `$${savingsWithCoupon.toFixed(2)}`;
        document.getElementById("error-container").innerHTML = "";
    }
}