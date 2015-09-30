class AccountAsset < ActiveRecord::Base
  belongs_to :account
  belongs_to :asset_list 
end
