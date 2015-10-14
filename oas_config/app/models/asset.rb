class Asset < ActiveRecord::Base
  has_many :account_assets
  has_many :accounts, :through => :account_assets
end
