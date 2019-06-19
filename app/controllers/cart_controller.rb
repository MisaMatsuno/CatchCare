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

    def mycart
    end

    def show
        @products = Cart.where("myaccount_id=?", params[:id])
		render json: @products
    end

    def destroy
        @product = Cart.find(params[:id])
        if @product.destroy
            render json: {state: "OK", message: "Successfully removed from your cart!"}
        else
            render json: @product.errors, status: :unprocessable_entity
        end
    end

    private
        def cart_params
            params.require(:cart).permit(:name, :category, :price, :quantity, :myaccount_id)
        end
end