class SolutionController < ApplicationController
	def index
		@products = Product.all
	end

	def create
		@products = Product.where("kind=?", params[:kind])
    	render json: @products
	end

end
