class DocumentsController < ApplicationController
    def index
      @documents = Document.all
      render json: @documents
    end

    def create
    	@document = Document.create(doc_params)
    	render json: @document
    end

    private
    def docs_controller
    	params.require(:document).permit(:title, :body)
	end
end
