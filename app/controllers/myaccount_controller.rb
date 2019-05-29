class MyaccountController < ApplicationController
	def index
	end

	def personalinfo
	end

	def new
		@myaccount = Myaccount.new
	end
	
	def show
		@myaccount = myaccount.find(params[:id])
	end

	def create
		@myaccount = Myaccount.new(account_params)
		if @myaccount.save
			redirect_to @myaccount
		else
			render 'new'
		end
	end

	private
		def account_params
			params.require(:myaccount).permit(:name,:username,:password)
		end
end