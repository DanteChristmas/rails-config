class Account < ActiveRecord::Base
  belongs_to :amp_config
  has_many :account_assets
  has_many :assets, :through => :account_assets
end
