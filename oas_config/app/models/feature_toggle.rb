class FeatureToggle < ActiveRecord::Base
  belongs_to :account, touch: true
end
