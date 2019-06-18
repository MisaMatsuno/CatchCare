class CartController < ApplicationController
    def index
    end

    def new
        @cart = Cart.new
    end

    def create
        @cart = Cart.new(cart_params)
		if @cart.save
			render json: {state: "OK", message: "Successfully added to your cart!"}
		else
			render json: @cart.errors, status: :unprocessable_entity
		end
    end

    private
        def cart_params
            params.require(:cart).permit(:name, :category, :price, :quantity, :myaccount_id)
        end
end