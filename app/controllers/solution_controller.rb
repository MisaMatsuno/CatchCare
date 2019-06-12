class SolutionController < ApplicationController
	def index
		@products = Product.all
	end

	def create
		@products = Product.where("name=?", params[:name])
    	render json: @products
	end

end
