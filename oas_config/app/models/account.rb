class Account < ActiveRecord::Base
  has_many :account_assets
  has_many :asset_lists, :through => :account_assets
end
