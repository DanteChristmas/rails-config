class Asset < ActiveRecord::Base
  has_many :asset_items
  has_many :asset_lists, :through => :asset_items
end
