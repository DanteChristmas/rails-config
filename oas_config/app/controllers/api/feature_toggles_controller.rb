module Api
  class FeatureTogglesController < Api::BaseApiController

    def feature_toggle_params
      params.require(:feature_toggle).permit(:robots, :paywall, :sitemap)
    end
  end
end
