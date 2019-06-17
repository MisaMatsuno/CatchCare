class TipsController < ApplicationController
    def index
        @tips = Tip.all
	end

    def create
        @tips = Tip.where("message=?", params[:message]).order('rating DESC')
    	render json: @tips
	end
end