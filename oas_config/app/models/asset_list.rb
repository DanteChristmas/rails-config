class AssetList < ActiveRecord::Base
  has_many :asset_items
  has_many :assets, :through => :asset_items
  has_many :account_assets
  has_many :accounts, :through =>:account_assets
end
