module Api
  class AssetListsController < Api::BaseApiController

    def asset_list_params
      params.require(:asset_list).permit(:version, :url, :asset_type, :script_created, :script_last_modified)
    end
  end
end
