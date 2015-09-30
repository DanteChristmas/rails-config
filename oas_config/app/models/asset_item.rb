class AssetItem < ActiveRecord::Base
  belongs_to :asset
  belongs_to :asset_list
end
