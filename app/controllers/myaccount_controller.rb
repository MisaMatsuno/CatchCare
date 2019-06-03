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
		render json: @myaccount
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

	def update
		@myaccount = Myaccount.find(params[:id])
		if @myaccount.update_attributes(detail_params)
		  render json: {state: "OK", message: "Success"}	
		else
		  render json: {state: "FAIL", message: @myaccount.errors}
		end
	end

	private
		def account_params
			params.require(:myaccount).permit(:name, :username, :password)
		end
	
		def detail_params
			params.require(:myaccount).permit(:id, :name, :username, :password, :birth, :phone, :gender, :interest)	
		end
end
