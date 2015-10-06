class AssetList < ActiveRecord::Base
  has_many :asset_items
  has_many :assets, :through => :asset_items
  has_many :account_assets
  has_many :accounts, :through =>:account_assets
  accepts_nested_attributes_for :assets, :allow_destroy => true

  # def self.find(id, params={})
  #   @list = super id
  #   @result = {
  #     asset_list: @list
  #   }
  #   @result[:assets] = @list.assets if params[:include_assets]
  #   @result[:accounts] = @list.accounts if params[:include_accounts]
  #
  #   @result
  # end
end
