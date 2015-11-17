class Account < ActiveRecord::Base
  belongs_to :amp_config, touch: true
  has_many :account_assets
  has_many :assets, :through => :account_assets
  has_one :feature_toggle
  before_save :publish_check

  def publish_check
    if self.amp_config_id_changed?
      self.full_cache_bust = true
    end
  end
end
