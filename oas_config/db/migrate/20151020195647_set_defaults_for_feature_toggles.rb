class SetDefaultsForFeatureToggles < ActiveRecord::Migration
  def up
    change_column :feature_toggles, :paywall, :boolean, :default => false
    change_column :feature_toggles, :sitemap, :boolean, :default => false
    change_column :feature_toggles, :robots, :boolean, :default => false
  end

  def down
    change_column :feature_toggles, :paywall, :boolean, :default => nil
    change_column :feature_toggles, :sitemap, :boolean, :default => nil
    change_column :feature_toggles, :robots, :boolean, :default => nil
  end
end
