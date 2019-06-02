class LoginController < ApplicationController
	def new
	end
	def index
	end

	def create
		@myaccount = Myaccount.where("username=? AND password=?", params[:username], params[:password])
    	render json: @myaccount
    end
    
end
