const financialProperties = Object.create({}, {
    Company: {
        value: "NSS",
        enumerable: true,
        writable: true,
    },
    Specialty: {
        value: "Program Developer",
        enumerable: true,
        writable: true,
    },
    Name: {
        value: "Aaron",
        enumerable: true,
    },
    Portfolio: {
        value: [
            {
                symbol: 'FBOK',
                price: 34,
                quantity: 24,
            },
            {
                symbol: 'TWT',
                price: 45,
                quantity: 14,
            },
            {
                symbol: 'MARJ',
                price: 16,
                quantity: 56,
            },
        ],
    },
    Worth: {
        value: function () {
            let totalWorth = 0
            for (i = 0; i < this.Portfolio.length; i++){
                console.log(this.Portfolio[i].price)
                let total = this.Portfolio[i].price * this.Portfolio[i].quantity;
                console.log(total);
                totalWorth += total;
            } 
            console.log("total ", totalWorth)
            return totalWorth 
        },
    },
    Purchase: {
        value: function(symbol, price, quantity) {
            let purchasedStock = {
                company: symbol,
                price: price,
                quantity: quantity
            };
            this.Portfolio.push(purchasedStock);
        },
        enumerable: false
    },
    sell: {
        value: function(symbol, price, quantity){
            Portfolio = this.Portfolio;
            for(let i = 0; i < Portfolio.length; i++){
                if(Portfolio[i].company === symbol && Portfolio[i].price === price && Portfolio[i].quantity === quantity){
                    Portfolio.splice(i,1);
                }
            }
        }
    },

});

financialProperties.Worth();

// financialProperties.Purchase("SBUX", 1000, 300);

financialProperties.Purchase("AAPL", 2000, 400);

console.log(financialProperties);

financialProperties.sell("AAPL", 2000, 400);

console.log(financialProperties)

financialProperties.Worth();

financialProperties.Purchase('MARJ', 1600, 50);

financialProperties.Worth();