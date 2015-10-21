class Account < ActiveRecord::Base
  belongs_to :amp_config, touch: true
  has_many :account_assets
  has_many :assets, :through => :account_assets
  has_one :feature_toggle
end
