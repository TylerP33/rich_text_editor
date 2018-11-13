module Api::V1
    class DocumentsController < ApplicationController
        def index
            @documents = Document.all
            render json: @documents
        end

        def create
    	   @document = Document.create(doc_params)

           if @document.save
                render json: @document, status: :created
            else
                render json: @document.errors, status: :unprocessable_entity
        end

    private
        def docs_controller
    	   params.require(:document).permit(:title, :body, :user_id)
	   end
    end
end
