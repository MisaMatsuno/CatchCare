class MyaccountController < ApplicationController
	protect_from_forgery with: :null_session
	def index
	end

	def personalinfo
	end

	def new
		@myaccount = Myaccount.new
	end
	
	def show
		@myaccount = Myaccount.find(params[:id])
	end

	def create
		@myaccount = Myaccount.new(account_params)
		if Myaccount.where(:username => @myaccount.username).exists?
			render json: {"state": "This email address has been registed"}
		else
			if @myaccount.save
				render json: {"state": "You have successfully created a account!"}
			else
				render json: @myaccount.errors, status: :unprocessable_entity
			end
		end
	end

	private
		def account_params
			params.require(:myaccount).permit(:name,:username,:password)
		end
end
