module Api
  class AssetsController < Api::BaseApiController

    def asset_params
      params.require(:asset).permit(:version, :url, :asset_type, :component_name, :script_created, :script_last_modified)
    end
  end
end
