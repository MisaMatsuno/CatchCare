class AddreplyController < ApplicationController
    def index
    end

    def create
        @reply = Reply.new(reply_params)
        if @reply.save
			render json: {state: "OK", message: "Successfully added reply!"}
		else
			render json: @reply.errors, status: :unprocessable_entity
        end
    end

    def new
    end

    def show
    end

    private
        def reply_params
            params.require(:reply).permit(:userID, :text, :post_id)
        end
end