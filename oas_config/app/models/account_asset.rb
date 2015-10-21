class AccountAsset < ActiveRecord::Base
  belongs_to :account, touch: true
  belongs_to :asset
end
