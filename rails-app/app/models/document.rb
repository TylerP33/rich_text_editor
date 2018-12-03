class Document < ApplicationRecord

	def self.user_search_pattern
		Document.find(:all, :conditions => ['keywords LIKE ?', '%cat%'])
	end 
	
	
end
