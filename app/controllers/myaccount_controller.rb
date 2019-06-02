class MyaccountController < ApplicationController
	protect_from_forgery with: :null_session
	def index
		@myaccount = Myaccount.where("username=? AND password=?", account_params)
    	render json: @myaccount
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
			render json: {state: "FAIL", message: "This email address has been registered!"}
		else
			if @myaccount.save
				render json: {state: "OK", message: "You have successfully created an account!"}
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
