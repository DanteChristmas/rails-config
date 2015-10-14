class Account < ActiveRecord::Base
  has_many :account_assets
  has_many :assets, :through => :account_assets

  def get_assets
    if Rails.configuration.serve_full_assets
      asset_lists.map {|i| i.assets}.flatten
    else
      asset_lists
    end
  end
end
