class ProductsController < ApplicationController

	def new
		@product = Product.new
	end

	def index
		@products = Product.all
	end

	def show
		@product = Product.find(params[:id])
	end

	private
		def product_params
			params.require(:product).permit(:name, :detail)
	  	end
end
