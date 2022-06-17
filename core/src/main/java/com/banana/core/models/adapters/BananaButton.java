package com.banana.core.models.adapters;

import com.adobe.cq.export.json.ComponentExporter;

public interface BananaButton extends ComponentExporter {
    public String getBananaName();
    public String getColorType();

    public String getButtonType();
}
