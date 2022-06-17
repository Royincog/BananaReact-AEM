package com.banana.core.models.adapters;

import com.adobe.cq.export.json.ComponentExporter;
import com.banana.core.entity.BananaCard;

import java.util.List;

public interface BananaCardListModel extends ComponentExporter {
    public List<BananaCard> getBananaCardList();
}
