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
        end

    private
        def doc_params
    	   params.require(:document).permit(body: {})
	   end
    end
end
